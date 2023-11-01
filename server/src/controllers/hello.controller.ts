import express, { Request, RequestHandler, Response } from "express";

export const helloController: RequestHandler = async (
    _req: Request,
    res: Response
) => {
    try {
        const data = "Hello? Is it 😎 you're looking for❓";
        res.status(200).json({ msg: data });
    } catch (err) {
        res.status(500).json({ msg: "Something is not right❌" }); // Use type assertion to cast 'err' to 'Error' type
    }
};