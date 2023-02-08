import { NextFunction, Request, Response } from "express";
import { Environment as env } from "@providers";
import { BadRequestException, UnauthorizedException } from "@exceptions";
import { GitHub } from "@connectors";
import OAuth from "oauth-1.0a";
import crypto from "crypto";

class ConnectorController {
}

export default new ConnectorController();
