import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import Blog from "../models/blogModel.js";
import { Readable } from 'stream';

// Multer Storage (for handling file uploads)
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const createBlog = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request file:", req.file);

        const { title, date, description } = req.body;
        let uploadedImageUrl = "";

        // Validate required fields
        if (!title || !date || !description) {
            return res.status(400).json({ message: "Missing required fields: title, date, description" });
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
                        { folder: "blogs" },
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
            console.log("Creating blog in database");
            const blog = await Blog.create({
                title,
                date,
                description,
                image: uploadedImageUrl,
            });
            console.log("blog created:", blog);
            res.status(201).json(blog);
        } catch (dbError) {
            console.error("Database error:", dbError);
            res.status(500).json({ message: "Error creating blog", error: dbError.toString() });
        }
    } catch (error) {
        console.error("Error in createBlog controller:", error);
        res.status(500).json({ message: "Server error", error: error.toString() });
    }
};

// Export the multer middleware for use in routes
export const uploadMiddleware = upload.single("image");