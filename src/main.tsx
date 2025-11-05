import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure favicon resolves correctly in both dev and production (handles BASE_URL)
const setFavicon = (href: string) => {
	try {
		let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.head.appendChild(link);
		}
		link.href = href;
	} catch (e) {
		// ignore (server-side environments)
	}
};

const base = typeof import.meta !== "undefined" ? (import.meta as any).env?.BASE_URL || "/" : "/";
setFavicon(`${base}favicon.png?v=2`);

createRoot(document.getElementById("root")!).render(<App />);
