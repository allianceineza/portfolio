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

        // Create blog in database
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

export const getAllBlog = async (req, res) => {
    try {
        console.log("Fetching all blogs from database...");
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Error fetching blogs", error: error.toString() });
    }
};

export const getAllBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Fetching product with ID: ${id}`);

    
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: "blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        res.status(500).json({ message: "Error fetching blog", error: error.toString() });
    }
};


export const updateBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Updating blog with ID: ${id}`);

        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: "blog not found" });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error("Error updating blog by ID:", error);
        res.status(500).json({ message: "Error updating blog", error: error.toString() });
    }
};

export const uploadMiddleware = upload.single("image");