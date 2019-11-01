import expressWinston from "express-winston";
import winston from "winston";

export const requestLogger = expressWinston.logger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()],
});
