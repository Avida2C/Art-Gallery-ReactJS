import { Link } from "react-router-dom";
import React from "react";
import "../../App.css"; // Import styles if needed

export default function Footer() {
    return (
        <footer className="container-fluid footer-container py-4">
            <div
                className="container text-white"
                style={{ backgroundColor: "transparent" }}
            >
                <div
                    className="footer-links"
                    style={{ backgroundColor: "transparent" }}
                >
                    <Link
                        to="/terms"
                        className="footer-link me-4"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            backgroundColor: "none",
                        }}
                    >
                        Terms of Service{" "}
                    </Link>
                    <Link
                        to="/privacy"
                        className="footer-link"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            backgroundColor: "none",
                        }}
                    >
                        Privacy Policy
                    </Link>
                </div>

                {/* Divider Line */}
                <hr className="footer-divider" />

                {/* Copyright Text */}
                <p className="footer-text">
                    © 2025 Avida2C. All Rights Reserved. Designed & Built by Avida2C |
                    Powered by Creativity
                </p>
            </div>
        </footer>
    );
}
