// Editorial Roles Data
const editorialRoles = [
    {
        number: 1,
        title: "Genome-Wide Association Study Identifies NIPA2 and NUP210 as Risk Loci for Primary Hyperhidrosis",
        authors: "Lozano LA, Bernal MD, Sarhane KA, et al.",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Neurogenetics, Springer Nature – 2025",
        link: "https://link.springer.com/article/10.1007/s10048-025-00868-x",
        images: []
    },
    {
        number: 2,
        title: "Nerve Transfers for Restoration of Hand Function After Complete Brachial Plexus Avulsion",
        authors: "Carlsen BT, Bishop AT, Shin AY",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2017",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2017.00560/full",
        images: []
    },
    {
        number: 3,
        title: "Functional Recovery of Intrinsic Hand Muscles After Nerve Reconstruction: A Systematic Review and Meta-Analysis",
        authors: "Ray WZ, Pet MA, Yee A, Mackinnon SE",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Surgery – 2022",
        link: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2022.786370/full",
        images: []
    },
    {
        number: 4,
        title: "Systematic Review of Outcome Reporting in Brachial Plexus Surgery",
        authors: "Tung TH, Mackinnon SE",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2016",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2016.00056/full",
        images: []
    },
    {
        number: 5,
        title: "Contralateral C7 to Lower Trunk Nerve Transfer for Treatment of Post-Traumatic Brachial Plexus Injuries: A Systematic Review and Meta-Analysis",
        authors: "Xu WD, Gu YD, Lu JZ, Shi JG",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2019",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2019.01077/full",
        images: []
    },
    {
        number: 6,
        title: "Cognitive Emotion Regulation Across the Stages of Burnout: A Study in Academic Medicine",
        authors: "Yusoff MSB, Rahim AFA, Noor NM, Yaacob NA, Hussin ZAM",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2016",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2016.00178/full",
        images: []
    },
    {
        number: 7,
        title: "The Neuronal Oscillations of Speech Processing and Language Comprehension: State of the Art and Emerging Mechanisms",
        authors: "Keitel A, Ince RAA, Gross J, Kayser C",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2017",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2017.00358/full",
        images: []
    },
    {
        number: 8,
        title: "Repetitive Transcranial Magnetic Stimulation for the Treatment of Chronic Pain: A Systematic Review and Meta-Analysis",
        authors: "Gatzinsky K, Bergh C, Liljegren A, Shafqat J, Hägg S",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2017",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2017.00267/full",
        images: []
    },
    {
        number: 9,
        title: "Central Post-Stroke Pain: Current Evidence on Mechanisms and Treatment",
        authors: "Klit H, Finnerup NB, Jensen TS",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2014",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2014.00091/full",
        images: []
    },
    {
        number: 10,
        title: "Effects of Transcutaneous Spinal Direct Current Stimulation in Idiopathic Restless Legs Patients",
        authors: "Heide AC, Winkler T, Helms HJ, Nitsche MA, Trenkwalder C, Paulus W, Bachmann CG",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2014",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2014.00137/full",
        images: []
    },
    {
        number: 11,
        title: "Transcranial Direct Current Stimulation Effects on Cortical Activity and Functional Connectivity in Attention-Deficit/Hyperactivity Disorder: A Randomized Controlled Trial",
        authors: "Soff C, Sotnikova A, Christiansen H, Becker K, Siniatchkin M",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2018",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2018.00194/full",
        images: []
    },
    {
        number: 12,
        title: "Altered Functional Connectivity in Patients with Post-Traumatic Stress Disorder: A Resting-State Functional Magnetic Resonance Imaging Study",
        authors: "Kennis M, Rademaker AR, van Rooij SJH, Kahn RS, Geuze E",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2015",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2015.00223/full",
        images: []
    },
    {
        number: 13,
        title: "Functional Connectivity in the Motor Cortex of Resting Human Brain Using Echo-Planar MRI",
        authors: "Biswal B, Yetkin FZ, Haughton VM, Hyde JS",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2016",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2016.00002/full",
        images: []
    },
    {
        number: 14,
        title: "The Neural Correlates of Morphological Processing: Evidence from Hebrew",
        authors: "Bick AS, Frost R, Goelman G",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2015",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2015.00222/full",
        images: []
    },
    {
        number: 15,
        title: "The Effect of Alpha-Band Rhythms on Motor-Cortex Activity: A Transcranial Alternating Current Stimulation Study",
        authors: "Dörr C, Heide S, Hummel FC",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2016",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2016.00142/full",
        images: []
    },
    {
        number: 16,
        title: "Brain State-Dependent Brain Stimulation",
        authors: "Bergmann TO, Karabanov A, Hartwigsen G, Thielscher A, Siebner HR",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2014",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2014.00086/full",
        images: []
    },
    {
        number: 17,
        title: "Mechanisms and Functional Roles of Theta Oscillations in Memory",
        authors: "Nyhus E, Curran T",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2017",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2017.00101/full",
        images: []
    },
    {
        number: 18,
        title: "Transcranial Direct Current Stimulation in Stroke: Clinical and Mechanistic Evidence",
        authors: "Rosso C, Perlbarg V, Valabregue R, Arbizu C, Ferrieux S, Alshwan R, Bellamy N, Vargas P, Humbert F, Attal Y, Meunier S, Lackmy-Vallee A, Lehéricy S, Samson Y",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2018",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2018.00096/full",
        images: []
    },
    {
        number: 19,
        title: "The Public Health Impact of 13-Valent Pneumococcal Conjugate Vaccine on Invasive Pneumococcal Disease in Children in Low- and Middle-Income Countries: A Systematic Review and Meta-Analysis",
        authors: "Patel M, Chochua S, Klugman KP",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Public Health – 2019",
        link: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2019.00027/full",
        images: []
    },
    {
        number: 20,
        title: "Neural Correlates of Empathy and Social Cognition in Healthy Adults: A Voxel-Based Morphometry Study",
        authors: "Hoffmann F, Koehne S, Steinbeis N, Dziobek I, Singer T",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2017",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2017.00223/full",
        images: []
    },
    {
        number: 21,
        title: "Neural Correlates of Theory of Mind Across Childhood and Adolescence: An fMRI Meta-Analysis",
        authors: "Meinhardt-Injac B, Daum MM, Meinhardt G, Persike M",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Psychology – 2017",
        link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00121/full",
        images: []
    },
    {
        number: 22,
        title: "Neuroinflammatory Mechanisms in Stroke: Focus on Microglial Activation",
        authors: "Xiong XY, Liu L, Yang QW",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2020",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2020.586905/full",
        images: []
    },
    {
        number: 23,
        title: "Vascularized Composite Allotransplantation: State of the Art and Future Perspectives",
        authors: "Shores JT, Brandacher G, Lee WPA",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Surgery – 2022",
        link: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2022.873507/full",
        images: []
    },
    {
        number: 24,
        title: "Peripheral Nerve Injury and Regeneration: Molecular Mechanisms and Therapeutic Approaches",
        authors: "Gordon T, English AW",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Surgery – 2022",
        link: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2022.942755/full",
        images: []
    },
    {
        number: 25,
        title: "Nerve Transfer Surgery: A Review of the Literature and Clinical Applications",
        authors: "Ray WZ, Mackinnon SE",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Neurology – 2022",
        link: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.857363/full",
        images: []
    },
    {
        number: 26,
        title: "Microsurgical Reconstruction: Current Trends and Future Directions",
        authors: "Cho MJ, Salgado CJ, Mardini S",
        reviewers: "Dr. Karim Sarhane (Scientific Reviewer)",
        journal: "Frontiers in Surgery – 2022",
        link: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2022.899179/full",
        images: []
    },
    {
        number: 27,
        title: "Pediatric Nerve Injuries: Diagnosis, Management, and Outcomes",
        authors: "Cornwall R, Radomisli TE",
        reviewers: "Dr. Karim Sarhane (Associate Editor)",
        journal: "Frontiers in Pediatrics – 2022",
        link: "https://www.frontiersin.org/journals/pediatrics/articles/10.3389/fped.2022.839171/full",
        images: [],
        isEditor: true
    }
];

// Render editorial roles
function renderEditorialRoles() {
    console.log('📝 Rendering', editorialRoles.length, 'editorial roles...');
    const editorialGrid = document.getElementById('editorialGrid');
    
    if (!editorialGrid) {
        console.error('❌ Error: editorialGrid element not found!');
        return false;
    }
    
    // Clear existing content
    editorialGrid.innerHTML = '';
    
    // Force display to ensure grid is visible
    editorialGrid.style.display = 'grid';
    editorialGrid.style.opacity = '1';
    editorialGrid.style.visibility = 'visible';
    
    editorialRoles.forEach(role => {
        const roleCard = document.createElement('a');
        roleCard.href = role.link || '#';
        roleCard.target = '_blank';
        roleCard.rel = 'noopener noreferrer';
        roleCard.className = 'article-card';
        
        // Force visibility on card
        roleCard.style.opacity = '1';
        roleCard.style.visibility = 'visible';
        
        roleCard.innerHTML = `
            <div class="article-content">
                <span class="article-number">Review ${role.number}</span>
                <h3 class="article-title">${role.title}</h3>
                <p class="article-authors">${role.authors}</p>
                <div class="article-reviewer ${role.isEditor ? 'article-editor' : ''}">
                    <i class="fas ${role.isEditor ? 'fa-user-edit' : 'fa-user-check'}"></i>
                    <span>${role.reviewers}</span>
                </div>
                <div class="article-journal">
                    <i class="fas fa-book-medical"></i>
                    <span>${role.journal}</span>
                </div>
            </div>
            <div class="article-link-icon">
                <i class="fas fa-external-link-alt"></i>
            </div>
        `;
        
        editorialGrid.appendChild(roleCard);
    });
    
    console.log('✅ Successfully rendered', editorialGrid.children.length, 'editorial role cards!');
    return true;
}

// Initialize with multiple fallbacks
function initializeEditorialRoles() {
    console.log('📝 Initializing editorial roles page...');
    
    // Try immediate rendering
    if (document.getElementById('editorialGrid')) {
        renderEditorialRoles();
    } else {
        // Wait for element to be available
        console.log('⏳ Waiting for editorialGrid element...');
        setTimeout(() => {
            if (document.getElementById('editorialGrid')) {
                renderEditorialRoles();
            } else {
                console.error('❌ editorialGrid element still not found after delay');
            }
        }, 500);
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEditorialRoles);
} else {
    // DOM is already ready
    initializeEditorialRoles();
}

// Also try to render when window loads (backup)
window.addEventListener('load', () => {
    const editorialGrid = document.getElementById('editorialGrid');
    if (editorialGrid && editorialGrid.children.length === 0) {
        console.log('🔄 Backup render triggered from window.load');
        renderEditorialRoles();
    }
});

// Emergency fallback - render after 2 seconds if still empty
setTimeout(() => {
    const editorialGrid = document.getElementById('editorialGrid');
    if (editorialGrid && editorialGrid.children.length === 0) {
        console.log('🚨 Emergency render triggered - grid was still empty after 2 seconds');
        renderEditorialRoles();
    }
}, 2000);

// Additional fallback - try again after 4 seconds
setTimeout(() => {
    const editorialGrid = document.getElementById('editorialGrid');
    if (editorialGrid && editorialGrid.children.length === 0) {
        console.log('🚨 Final emergency render triggered - grid was still empty after 4 seconds');
        renderEditorialRoles();
    }
}, 4000);
