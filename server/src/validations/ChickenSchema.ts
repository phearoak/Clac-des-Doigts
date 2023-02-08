import { Schema } from "express-validator";

const ChickenSchema: Schema = {
    id: {
        in: "params",
        notEmpty: {
            errorMessage: "param id is required.",
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "param id must be a positive number.",
        },
    },
};

const CreateSchema: Schema = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Name is required",
        },
        isString: {
            errorMessage: "Name must be a string.",
        },
        isLength: {
            options: { min: 2 },
            errorMessage: "Name should be at least 2 characters.",
        },
    },
    weight: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Weight is required",
        },
        isInt: {
            errorMessage: "Description must be number.",
        }
    }
};

const ReadSchema: Schema = {
    service: {
        in: ["params"],
        notEmpty: {
            errorMessage: "param ServiceId is required",
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "param ServiceId must be a positive integer.",
        },
    },
};

const UpdateSchema: Schema = {
    service: {
        in: ["params"],
        notEmpty: {
            errorMessage: "param ServiceId is required",
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "param ServiceId must be a positive integer.",
        },
    },
};

const DeleteSchema: Schema = {
    service: {
        in: ["params"],
        notEmpty: {
            errorMessage: "param ServiceId is required",
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "param ServiceId must be a positive integer.",
        },
    },
};

export default {
    ChickenSchema,
    CreateSchema,
    ReadSchema,
    UpdateSchema,
    DeleteSchema,
};
