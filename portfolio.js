 document.addEventListener('DOMContentLoaded', function() {
            // ========== INITIALIZE AOS (Animate On Scroll) ==========
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });

            // ========== INITIALIZE FEATHER ICONS ==========
            if (typeof feather !== 'undefined') {
    feather.replace();
}
            // ========== THEME TOGGLE FUNCTIONALITY ==========
            // Theme toggle functionality is now handled in portfolio.js
            
            // ========== MOBILE MENU TOGGLE ==========
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const navLinksContainer = document.getElementById('nav-links');
            mobileMenuButton.addEventListener('click', () => {
                navLinksContainer.classList.toggle('hidden');
                navLinksContainer.classList.toggle('flex');
            });

            // ========== SMOOTH SCROLLING FOR NAVIGATION ==========
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        if (window.innerWidth < 768) {
                           navLinksContainer.classList.add('hidden');
                        }
                    }
                });
            });

            // ========== VANTA.JS BACKGROUND ANIMATION ==========
            VANTA.GLOBE({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x00d4ff,
                backgroundColor: 0x0f0f13,
                size: 0.8
            });

            // ===================================================================
            // =================== DYNAMIC CONTENT MANAGEMENT ====================
            // ===================================================================
            
            // ---------- DATA ----------

            const projectsData = [
                // Projects
                {
                    title: "COVID-19 Data Analysis",
                    description: "An interactive dashboard analyzing global COVID-19 data, selected at the national level.",
                    tags: ["Data Analysis", "Python", "Power BI"],
                    imgSrc: "images/covid-project.png", // The screenshot you just saved
                    link: "https://docs.google.com/document/d/1Uo2L5O3MVb-_2wEO0eQRxUY_vjjEf9AqgLLBSxbTnXM/edit?usp=sharing",
                    category: "project"
                },
                // Certificates
               
            { 
                title: "Data Analysis with Python", 
                issuer: "Issued by IBM SkillsBuild", 
                imgSrc: "images/ibm-python-cert.png", // Make sure you've created this screenshot
                link: "https://courses.skillsbuild.skillsnetwork.site/certificates/f515c57f8b7442a3a6425e225e90f426", 
                category: "certificate" 
            },
                            { 
                title: "Decoding Data: Insights & Impact through Analytics", // [cite: 76, 77]
                issuer: "Issued by IBM SkillsBuild", // [cite: 71]
                imgSrc: "images/ibm-decoding-data-cert.png", // The screenshot you just saved
                link: "assets/Aditya Anand-Decoding data.pdf", // The PDF file
                category: "certificate" 
            },
            {
                title: "Big Data 101",
                    issuer: "Issued by IBM SkillsBuild",
                    imgSrc: "images/ibm-big-data-cert.png",
                    link: "https://courses.skillsbuild.skillsnetwork.site/certificates/d448fd41abe845108756f7339ee502f7",
                    category: "certificate"
            },
            {
                 title: "PBL Program: Decoding Data", // [cite: 9]
                issuer: "Issued by IBM SkillsBuild & CSRBOX", // [cite: 3, 1]
                imgSrc: "images/ibm-pbl-cert.png", // The screenshot you just saved
                link: "assets/IBM SKillsBuild-Decoding Data.pdf", // The PDF file
                category: "certificate"
            },
            { 
        title: "Gemini for Google Workspace", 
        issuer: "Issued by Simplilearn", 
        imgSrc: "images/gemini-cert.png", // The screenshot you saved
        link: "assets/Google Workspace with Gemeni.pdf", // The PDF file
        category: "certificate" 
    },
    { 
        title: "Advanced Prompt Engineering", 
        issuer: "Issued by Simplilearn", 
        imgSrc: "images/prompt-engg-cert.png", // The screenshot you saved
        link: "assets/Adv Prompt ENgg.pdf", // The PDF file
        category: "certificate" 
    },
                            { 
                title: "Python ", // [cite: 76, 77]
                issuer: "Issued by Geeks for Geeks", // [cite: 71]
                imgSrc: "images/gfgpython.png", // The screenshot you just saved
                link: "https://www.geeksforgeeks.org/certificate/d2bff9cafef6ea02389286be1774eabf?utm_source=socials&utm_medium=cc_link", // The PDF file
                category: "certificate" 
            }

            ];

            const technicalSkillsData = [
                { name: "Prompt Engineering", level: 95 },
                { name: "Python", level: 90 },
                { name: "HTML/CSS", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "UI/UX Design", level: 80 }
            ];
            
            const professionalSkillsData = [
                { name: "User Research", level: 90 },
                { name: "Data Visualization", level: 85 },
                { name: "Strategic Thinking", level: 88 },
                { name: "Team Collaboration", level: 92 },
                { name: "Public Speaking", level: 85 }
            ];

            const experienceData = [
    { 
        title: "Data Analyst Intern",
        company: "IBM SkillsBuild",
        period: "Jun-Aug 2025",
        description: "Collaborated with a team to develop a COVID-19 Data Analysis Project, which was selected at the national level.",
        duties: [
            "Gained hands-on experience in Data Analysis using SQL, Python, and libraries (Pandas, NumPy, Matplotlib).",
            "Conducted exploratory data analysis (EDA) to identify patterns, trends, and insights in large datasets.",
            "Created visualizations and dashboards to present results in a clear and meaningful way."
        ] 
    },
    { 
        title: "Intern",
        company: "State Bank of India (SBI)",
        period: "Jul-Aug 2025",
        description: "Gained practical exposure to banking operations, customer service, and financial procedures.",
        duties: [
            "Assisted in daily branch operations, including account handling and transaction verification.",
            "Supported the team in analyzing branch data and performance metrics to identify process improvements.",
            "Developed communication and professional skills through interaction with clients and staff."
        ] 
    }
];

const toolsData = [
    { name: "VS Code", iconSrc: "images/vscode-logo.png" },
    { name: "Artificial Intelligence", iconSrc: "images/ai.png" },
    { name: "Canva", iconSrc: "images/canva-logo.png" },
    { name: "Qoder", iconSrc: "images/qoder-logo.png" },
    { name: "Excel", iconSrc: "images/excel-logo.png" },
    { name: "PowerPoint", iconSrc: "images/ppt-logo.png" },
    { name: "Word", iconSrc: "images/word-logo.png" },
    { name: "GitHub", iconSrc: "images/github-logo.png" }
];

           // ADD THIS NEW CODE BLOCK TO portfolio.js

// ========== RENDER AND FILTER PROJECTS/CERTIFICATES ==========
const projectGrid = document.getElementById('project-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderWorkItems(filter = 'project') {
    if (!projectGrid) return;

    // 1. Filter the data array first
    const filteredData = projectsData.filter(item => item.category === filter);
    
    // 2. Generate HTML from the filtered data
    projectGrid.innerHTML = filteredData.map((item, i) => {
        if (item.category === 'certificate') {
            // HTML for a certificate card
            return `
                <div class="project-card glass-card rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="${100 * (i + 1)}">
                    <img src="${item.imgSrc}" alt="${item.title}" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                        <p class="text-gray-400 text-sm mb-4">${item.issuer}</p>
                        <a href="${item.link}" target="_blank" class="text-sm text-[#00d4ff] hover:text-[#00b4d8] transition flex items-center">
                            View Certificate <i data-feather="external-link" class="ml-1 w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            `;
        } else {
            // HTML for a project card
            return `
                <div class="project-card glass-card rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="${100 * (i + 1)}">
                     <img src="${item.imgSrc}" alt="${item.title}" class="w-full h-64 object-cover">
                     <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                        <p class="text-gray-300 text-sm mb-4">${item.description}</p>
                        <a href="${item.link}" target="_blank" class="text-sm text-[#00d4ff] hover:text-[#00b4d8] transition flex items-center">
                        View Case Study <i data-feather="external-link" class="ml-1 w-4 h-4"></i>
                    </a>
                    </div>
                </div>
            `;
        }
    }).join('');
    
    // 3. Redraw icons after updating HTML
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Add click listeners to the filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        renderWorkItems(filterValue);
    });
});

// In the "INITIALIZE DYNAMIC CONTENT" section at the bottom of the file, add this line:
renderWorkItems('project'); // This shows the projects by default when the page loads

            function renderSkills(containerId, skills) {
                const container = document.getElementById(containerId);
                if (!container) return;
                container.innerHTML = skills.map((s, i) => {
                   const isGreen = false;
                    return `
                        <div class="skill-item">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">${s.name}</span>
                                <span class="text-gray-400 skill-percentage" data-target="${s.level}">0%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress ${isGreen ? 'green' : ''}" style="width: 0%;" data-width="${s.level}"></div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            function renderExperience() {
                const container = document.getElementById('experience-timeline');
                if (!container) return;
                 container.innerHTML = `
                    <div class="absolute left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-[#00d4ff] to-transparent opacity-20"></div>
                    ${experienceData.map((e, i) => `
                        <div class="mb-12" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <div class="flex flex-col md:flex-row">
                                <div class="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 ${i % 2 !== 0 ? 'md:order-2 md:pl-12 md:text-left' : ''}">
                                    <h3 class="text-xl font-semibold">${e.title}</h3>
                                    <p class="text-[#00d4ff]">${e.company}</p>
                                    <p class="text-gray-400 text-sm">${e.period}</p>
                                </div>
                                <div class="md:w-1/2 md:pl-12 ${i % 2 !== 0 ? 'md:order-1 md:pr-12 md:pl-0' : ''}">
                                    <div class="glass-card p-6 rounded-xl">
                                        <p class="text-gray-300 mb-4">${e.description}</p>
                                        <ul class="text-gray-400 text-sm space-y-2">
                                            ${e.duties.map(duty => `
                                                <li class="flex items-start">
                                                    <i data-feather="check" class="text-[#00d4ff] mr-2 mt-0.5 flex-shrink-0"></i>
                                                    <span>${duty}</span>
                                                </li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                `;
            }

            function renderTools() {
    const container = document.getElementById('tools-grid');
    if (!container) return;
    container.innerHTML = toolsData.map(tool => `
        <div class="tool-card" data-aos="fade-up">
            <img src="${tool.iconSrc}" alt="${tool.name} logo" class="w-12 h-12">
            <span class="mt-4 text-sm">${tool.name}</span>
        </div>
    `).join('');
}

            // ---------- INITIALIZE DYNAMIC CONTENT ----------
            renderWorkItems('project'); // Show projects by default
            renderSkills('technical-skills-container', technicalSkillsData);
            renderSkills('professional-skills-container', professionalSkillsData);
            renderExperience();
            renderTools();

            // Re-initialize Feather Icons after dynamic content is added
            feather.replace();
            
            // Initialize skill bar animations after content is rendered
            setTimeout(() => {
                initializeSkillAnimations();
            }, 100);

            // ===================================================================
            // ================== ADDITIONAL DYNAMIC FEATURES ====================
            // ===================================================================

            // ---------- HERO TYPEWRITER EFFECT ----------
            const typewriterTextElement = document.getElementById('typewriter-text');
            const roles = ['Data Analyst', 'Web Developer'];
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentRole = roles[roleIndex];
                let displayText = '';

                if (isDeleting) {
                    displayText = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    displayText = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                }

                typewriterTextElement.textContent = displayText;
                let typeSpeed = isDeleting ? 100 : 200;

                if (!isDeleting && charIndex === currentRole.length) {
                    typeSpeed = 2000; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    typeSpeed = 500; // Pause before new word
                }

                setTimeout(type, typeSpeed);
            }
            type();

            // ---------- ACTIVE NAV LINK ON SCROLL ----------
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('#nav-links a');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
            
            // ---------- ANIMATED SKILL BARS ----------
            function initializeSkillAnimations() {
                const skillItems = document.querySelectorAll('.skill-item');
                
                if (skillItems.length === 0) return;
                
                const skillObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const skillItem = entry.target;
                            const progressBar = skillItem.querySelector('.skill-progress');
                            const percentageSpan = skillItem.querySelector('.skill-percentage');
                            
                            if (!progressBar || !percentageSpan) return;
                            
                            const targetWidth = parseInt(progressBar.getAttribute('data-width'));
                            const targetPercentage = parseInt(percentageSpan.getAttribute('data-target'));
                            
                            // Only animate if not already animated
                            if (!progressBar.hasAttribute('data-animated')) {
                                progressBar.setAttribute('data-animated', 'true');
                                
                                // Animate the progress bar width
                                setTimeout(() => {
                                    progressBar.style.width = targetWidth + '%';
                                }, 100);
                                
                                // Animate the percentage counter
                                let currentPercentage = 0;
                                const increment = targetPercentage / 150; // 150 steps for smooth animation
                                
                                const countUp = () => {
                                    if (currentPercentage < targetPercentage) {
                                        currentPercentage += increment;
                                        if (currentPercentage > targetPercentage) {
                                            currentPercentage = targetPercentage;
                                        }
                                        percentageSpan.textContent = Math.round(currentPercentage) + '%';
                                        requestAnimationFrame(countUp);
                                    }
                                };
                                
                                // Start the counter animation with a slight delay
                                setTimeout(countUp, 200);
                            }
                            
                            // Stop observing this element after animation
                            skillObserver.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.5,
                    rootMargin: '0px 0px -50px 0px'
                });
                
                skillItems.forEach(item => {
                    skillObserver.observe(item);
                });
            }
            
            // ===================================================================
            // ================== NEW ENHANCED FEATURES ==========================
            // ===================================================================
            
            // ---------- CUSTOM CURSOR ----------
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            let mouseX = 0, mouseY = 0;
            let followerX = 0, followerY = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            });
            
            function animateFollower() {
                followerX += (mouseX - followerX) * 0.1;
                followerY += (mouseY - followerY) * 0.1;
                
                cursorFollower.style.left = followerX + 'px';
                cursorFollower.style.top = followerY + 'px';
                
                requestAnimationFrame(animateFollower);
            }
            animateFollower();
            
            // Cursor hover effects
            const interactiveElements = document.querySelectorAll('a, button, .glass-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorFollower.classList.add('cursor-hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursorFollower.classList.remove('cursor-hover');
                });
            });
        


            
            // ---------- 3D PARALLAX EFFECT ----------
            const heroSection = document.getElementById('hero');
            const parallaxElements = document.querySelectorAll('.parallax-element');
            
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                parallaxElements.forEach((element, index) => {
                    const intensity = (index + 1) * 10;
                    const moveX = (x - 0.5) * intensity;
                    const moveY = (y - 0.5) * intensity;
                    
                    element.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
                });
            });
            
            heroSection.addEventListener('mouseleave', () => {
                parallaxElements.forEach(element => {
                    element.style.transform = 'translate(0, 0)';
                });
            });
            
            // ---------- PROJECT FILTERING ----------
            // Note: filterButtons is already declared above and handles the filtering logic
            
            // ---------- GLASS CARD GLARE EFFECT ----------
            const glassCards = document.querySelectorAll('.glass-card');
            
            glassCards.forEach(card => {
                const glare = card.querySelector('.glare');
                if (!glare) return;
                
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    glare.style.setProperty('--x', x + 'px');
                    glare.style.setProperty('--y', y + 'px');
                });
            });
        });
    

    