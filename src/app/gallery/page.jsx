import { Suspense } from "react";
import GalleryPage from "./galleryPage";

export default async function GalleryServer() {
    return (
        <Suspense>
            <GalleryPage />
        </Suspense>
    )
}