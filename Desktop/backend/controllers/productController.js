import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import Product from "../models/productModel.js";
import { Readable } from 'stream';

// Multer Storage (for handling file uploads)
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const createProduct = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request file:", req.file);

        const { name, price, category, discount } = req.body;
        let uploadedImageUrl = "";

        // Validate required fields
        if (!name || !price || !category) {
            return res.status(400).json({ message: "Missing required fields: name, price, category" });
        }

        // Validate price and discount
        if (isNaN(parseFloat(price)) || (discount && isNaN(parseFloat(discount)))) {
            return res.status(400).json({ message: "Price and discount must be valid numbers" });
        }

        console.log("Required fields validated");

        // Handle file upload to Cloudinary
        if (req.file) {
            try {
                console.log("Uploading file to Cloudinary");
                
                // Create a stream from the buffer
                const stream = Readable.from(req.file.buffer);

                // Use Cloudinary's upload_stream method
                const cloudinaryUpload = new Promise((resolve, reject) => {
                    const cloudinaryStream = cloudinary.uploader.upload_stream(
                        { folder: "products" },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    );

                    stream.pipe(cloudinaryStream);
                });

                const cloudinaryResponse = await cloudinaryUpload;
                console.log("Cloudinary response:", cloudinaryResponse);
                uploadedImageUrl = cloudinaryResponse.secure_url;
            } catch (cloudinaryError) {
                console.error("Cloudinary upload error:", cloudinaryError);
                return res.status(500).json({ message: "Error uploading image", error: cloudinaryError.toString() });
            }
        }

        // Create product in database
        try {
            console.log("Creating product in database");
            const product = await Product.create({
                name,
                price: parseFloat(price),
                category,
                discount: discount ? parseFloat(discount) : 0,
                image: uploadedImageUrl,
            });
            console.log("Product created:", product);
            res.status(201).json(product);
        } catch (dbError) {
            console.error("Database error:", dbError);
            res.status(500).json({ message: "Error creating product", error: dbError.toString() });
        }
    } catch (error) {
        console.error("Error in createProduct controller:", error);
        res.status(500).json({ message: "Server error", error: error.toString() });
    }
};

// Export the multer middleware for use in routes
export const uploadMiddleware = upload.single("image");