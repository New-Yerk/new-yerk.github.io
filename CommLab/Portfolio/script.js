document.addEventListener('DOMContentLoaded', () => {
    // Array of project objects with their details
    const projects = [
        { name: 'The Garden', url: 'https://new-yerk.github.io/CommLab/Flower/Home.html', x: 10, y: 20 },
        { name: 'NYUAD', url: 'https://khaleeks.github.io/comicAssign/index.html', x: 30, y: 60 },
        { name: 'Castle Hospital', url: 'https://3md-1.github.io/Sound-Project-Comms-Lab-Fall-2024/SoundProjectFiles/index.html', x: 50, y: 40 },
        { name: "The Principal's Office", url: 'https://khaleeks.github.io/VidEOH/index.html', x: 70, y: 70 },
        { name: 'The Dance Floor', url: 'https://youtu.be/hCLKoBnLZAM', x: 90, y: 30 }
    ];

    // Getting references to the map and progress bar elements
    const map = document.querySelector('.map');
    const progressBar = document.querySelector('.progress');
    let visitedProjects = new Set();

    // Creating dots and previews for each project
    projects.forEach((project, index) => {
        // Creating and positioning the dots
        const dot = document.createElement('div');
        dot.className = 'project-dot';
        dot.style.left = `calc(${project.x}% - 10px)`;
        dot.style.top = `calc(${project.y}% - 10px)`;
        
        // Creating the preview element
        const preview = document.createElement('div');
        preview.className = 'project-preview';
        preview.style.display = 'none';
        
        // Setting the content of the preview
        preview.innerHTML = `
            <h4>${project.name}</h4>
            <div class="placeholder"></div>
            <p>Click to visit</p>
        `;
        
        // Adding dot and preview to the map
        map.appendChild(dot);
        map.appendChild(preview);

        let iframe;

        // Showing preview on hover
        dot.addEventListener('mouseenter', () => {
            preview.style.display = 'block';
            const placeholder = preview.querySelector('.placeholder');
            if (!iframe) {
                // Creating iframe if it doesn't exist
                iframe = document.createElement('iframe');
                iframe.src = getEmbedUrl(project.url);
                iframe.frameBorder = '0';
                iframe.allow = 'autoplay; encrypted-media';
                iframe.allowFullscreen = true;
                placeholder.appendChild(iframe);
            }
            adjustPreviewPosition(dot, preview, map);
        });

        // Hiding preview on mouse leave
        dot.addEventListener('mouseleave', () => {
            preview.style.display = 'none';
        });

        // Opening project in new tab and updating progress on click
        dot.addEventListener('click', () => {
            window.open(project.url, '_blank');
            visitedProjects.add(index);
            updateProgressBar();
        });
    });

    // Function to embed URL for YouTube videos
    function getEmbedUrl(url) {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1`;
        }
        return url;
    }

    // Function to adjust preview position
    function adjustPreviewPosition(dot, preview, container) {
        const dotRect = dot.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        let left = dotRect.left - containerRect.left;
        let top = dotRect.top - containerRect.top;

        // Adjust position if preview goes out of bounds
        if (left + preview.offsetWidth > containerRect.width) {
            left = containerRect.width - preview.offsetWidth;
        }
        if (top + preview.offsetHeight > containerRect.height) {
            top = containerRect.height - preview.offsetHeight;
        }

        preview.style.left = `${left}px`;
        preview.style.top = `${top}px`;
    }

    // Function to update the progress bar
    function updateProgressBar() {
        const progress = (visitedProjects.size / projects.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Creating canvas for line animations
    const canvas = document.createElement('canvas');
    canvas.width = map.offsetWidth;
    canvas.height = map.offsetHeight;
    map.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Function to draw a line
    function drawLine(startX, startY, endX, endY, progress) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress);
        ctx.stroke();
    }

    // Function to animate lines between dots
    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#8b4513';
        ctx.lineWidth = 2;

        const time = Date.now() * 0.0005;
        const duration = 2;
        const progress = (Math.sin(time * Math.PI / duration) + 1) / 2;

        // Drawing lines between consecutive dots
        for (let i = 0; i < projects.length - 1; i++) {
            const startX = projects[i].x * canvas.width / 100;
            const startY = projects[i].y * canvas.height / 100;
            const endX = projects[i + 1].x * canvas.width / 100;
            const endY = projects[i + 1].y * canvas.height / 100;

            drawLine(startX, startY, endX, endY, progress);
        }

        // Continuing animation
        requestAnimationFrame(animateLines);
    }

    // Starting the line animation
    animateLines();

    // Adjusting canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = map.offsetWidth;
        canvas.height = map.offsetHeight;
    });
});
