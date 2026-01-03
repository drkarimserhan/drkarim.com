// Book Chapters Data
const bookChapters = [
    {
        number: 1,
        title: "Overweight and Obesity: A True Global Epidemic",
        authors: "Atiyeh BS and <strong>Karim Sarhane</strong>",
        publication: "Body contouring following bariatric surgery and massive weight loss post-bariatric body contouring. Editor: Atiyeh (Ed), p 3-11 – Bentham Science Publishers – 2012",
        link: "http://www.eurekaselect.com/chapter/445",
        images: ['https://www.genspark.ai/api/files/s/sm3Xaafo']
    },
    {
        number: 2,
        title: "Biomarkers of Nerve Regeneration in Peripheral Nerve Injuries: An Emerging Field",
        authors: "<strong>Karim Sarhane</strong>, Cashman C, Krick K, Tuffaha SH, Broyles JM, Khalifian S, Alrakan M, Baltodano P, Ibrahim Z, Brandacher G",
        publication: "Biomarkers of Brain Injury and Neurological Disorders. Editors: Wang, Zhang, and Kobeissy (Ed), p 566-590 – Science Publishers – 2014",
        link: "https://www.taylorfrancis.com/chapters/edit/10.1201/b17644-28/biomarkers-nerve-regeneration-peripheral-nerve-injuries-emerging-field",
        images: ['https://www.genspark.ai/api/files/s/0DCuT06Z']
    },
    {
        number: 3,
        title: "Robotic Surgery in Breast Reconstruction: Harvest of the Latissimus Dorsi Muscle Flap",
        authors: "Ibrahim AE, Clemens M, <strong>Karim Sarhane</strong>, Selber J",
        publication: "Breast Reconstruction: Art, Science, and New Clinical Techniques. Editor: Shiffman MA (Ed), p 765-773, Springer-Verlag – 2016",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-18726-6_73",
        images: ['https://www.genspark.ai/api/files/s/yS3KBrxz']
    },
    {
        number: 4,
        title: "Late Capsular Hematoma After Implant-Based Breast Reconstruction",
        authors: "Ibrahim AE, <strong>Karim Sarhane</strong>, Chang E, Atiyeh B",
        publication: "Breast Reconstruction: Art, Science, and New Clinical Techniques. Editor: Shiffman MA (Ed), p 1423-1429, Springer-Verlag – 2016",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-18726-6_140",
        images: ['https://www.genspark.ai/api/files/s/XizRLfsS']
    },
    {
        number: 5,
        title: "Breast Implant Associated Anaplastic Large Cell Lymphoma (ALCL): Current Recommendations on Diagnosis and Treatment Strategies",
        authors: "Ibrahim AE, Atiyeh B, <strong>Karim Sarhane</strong>, Clemens M",
        publication: "Breast Reconstruction: Art, Science, and New Clinical Techniques. Editor: Shiffman MA (Ed), p 1491-1494, Springer-Verlag – 2016",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-18726-6_147",
        images: ['https://www.genspark.ai/api/files/s/QR9dtziQ']
    },
    {
        number: 6,
        title: "Robotic Reconstructive Surgery: Principles and Clinical Applications",
        authors: "Ibrahim AE, Atiyeh B, <strong>Karim Sarhane</strong>, Clemens M",
        publication: "Reconstructive Plastic Surgery of the Head and Neck. Editors: Hanasono, Skoracki, Yu and Robb (Ed), p 220-229, Thieme Medical Publishers – 2016",
        link: "https://www.thieme-connect.de/products/ebooks/lookinside/10.1055/b-0036-134342",
        images: ['https://www.genspark.ai/api/files/s/fbre1EyP']
    },
    {
        number: 7,
        title: "Robotic Harvest of the Rectus Abdominus Muscle for Flap Reconstruction",
        authors: "<strong>Karim Sarhane</strong>, Ibrahim A, Selber JC",
        publication: "Operative Dictations in Plastic and Reconstructive Surgery. Editors: Tran, Thaller, Panthaki, and Hoballah (Ed), Springer International Publishing – 2017",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-40631-2_157",
        images: ['https://www.genspark.ai/api/files/s/N5xeLDoL']
    },
    {
        number: 8,
        title: "Robotic Harvest of the Latissimus Dorsi Muscle for Flap Reconstruction",
        authors: "<strong>Karim Sarhane</strong>, Ibrahim A, Selber JC",
        publication: "Operative Dictations in Plastic and Reconstructive Surgery. Editors: Tran, Thaller, Panthaki, and Hoballah (Ed), Springer International Publishing – 2017",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-40631-2_156",
        images: ['https://www.genspark.ai/api/files/s/gUKLSpqC']
    },
    {
        number: 9,
        title: "Robotic Reconstructive Surgery",
        authors: "Ibrahim A, <strong>Karim Sarhane</strong>, Selber JC",
        publication: "Atlas of Head and Neck Robotic Surgery. Editors: Gil Z., Amit M., Kupferman M. (eds). Springer, Cham. pp 149-160 – 2017",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-49578-1_16",
        images: ['https://www.genspark.ai/api/files/s/gQfrEvN4']
    },
    {
        number: 10,
        title: "Robotics in Plastic Surgery",
        authors: "Ibrahim A, <strong>Karim Sarhane</strong>, Selber JC",
        publication: "Neligan Plastic Surgery 4e: Principles volume. Editor: Neligan P (Ed). Saunders. Volume 1, Chapter 34 – 2017",
        link: "https://link.springer.com/chapter/10.1007/978-3-319-49578-1_16",
        images: ['https://www.genspark.ai/api/files/s/5Upf3DZm']
    },
    {
        number: 11,
        title: "Advanced autologous tissue flaps for whole breast reconstruction: Robotic latissimus dorsi muscle harvest",
        authors: "<strong>Karim Sarhane</strong>, Ibrahim A, Selber JC",
        publication: "Oncoplastic and Reconstructive Management of the Breast: A Multidisciplinary Approach, Third Edition. Editor: Kronowitz, Benson, and Nava (Ed), CRC Press/Taylor & Francis Group – 2020",
        link: "https://www.taylorfrancis.com/books/edit/10.1201/9781003005476/oncoplastic-reconstructive-management-breast-third-edition-steven-kronowitz-john-benson-maurizio-nava",
        images: ['https://www.genspark.ai/api/files/s/RsljbBhg']
    }
];

// Render chapters
function renderChapters() {
    console.log('📚 Rendering', bookChapters.length, 'book chapters...');
    const chaptersGrid = document.getElementById('chaptersGrid');
    
    bookChapters.forEach(chapter => {
        const chapterCard = document.createElement('a');
        chapterCard.href = chapter.link || '#';
        chapterCard.target = '_blank';
        chapterCard.rel = 'noopener noreferrer';
        chapterCard.className = 'chapter-card';
        
        // Create images section (after authors)
        let imagesHTML = '';
        if (chapter.images && chapter.images.length > 0) {
            imagesHTML = '<div class="chapter-images">';
            chapter.images.forEach((img, index) => {
                const singleClass = chapter.images.length === 1 ? ' single' : '';
                imagesHTML += `<img src="${img}" alt="${chapter.title}" class="chapter-image${singleClass}" loading="lazy">`;
            });
            imagesHTML += '</div>';
        }
        
        chapterCard.innerHTML = `
            <div class="chapter-content">
                <span class="chapter-number">Chapter ${chapter.number}</span>
                <h3 class="chapter-title">${chapter.title}</h3>
                <p class="chapter-authors">${chapter.authors}</p>
                ${imagesHTML}
                <div class="chapter-publication">
                    <i class="fas fa-book"></i>
                    <span>${chapter.publication}</span>
                </div>
            </div>
            <div class="chapter-link-icon">
                <i class="fas fa-external-link-alt"></i>
            </div>
        `;
        
        chaptersGrid.appendChild(chapterCard);
    });
    
    console.log('✅ Successfully rendered all chapters!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM Content Loaded - Starting chapter rendering...');
    renderChapters();
});
