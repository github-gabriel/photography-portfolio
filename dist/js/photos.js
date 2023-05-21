import exifr from 'exifr';

import json from "../assets/images/images.json"

const grid = document.querySelector('.basic-grid');
const dir = "../assets/images/"

async function getMetadata(image) {
    try {
        return await exifr.parse(image, ['ISO', 'ExposureTime', 'FocalLength', 'FNumber']);
    } catch (error) {
        console.error(`Failed to load metadata for ${image}: ${error.message}`);
        return {};
    }
}


async function init() {

    for (let image of json.images) {

        image = dir + image;

        const metadata = await getMetadata(image);

        const div = document.createElement('div');
        div.className = 'item';

        const img = document.createElement('img');
        img.src = image;

        img.addEventListener('click', () => {
            const modal = document.getElementById('image-modal');
            const modalImg = document.createElement('img');
            modalImg.src = image;
            modal.innerHTML = '';
            modal.appendChild(modalImg);
            modal.style.display = 'block';
        });

        const paragraph = document.createElement('p');
        paragraph.className = 'paragraph';
        console.log(metadata)
        paragraph.innerHTML = `f/${metadata.FNumber}&nbsp${metadata.FocalLength}mm&nbsp${metadata.ExposureTime}s&nbspISO ${metadata.ISO}`;

        div.appendChild(img);
        div.appendChild(paragraph);

        grid.appendChild(div);
    }


    const modal = document.getElementById('image-modal');
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

}

init()

