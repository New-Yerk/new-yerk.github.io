document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'The Garden', url: 'https://new-yerk.github.io/CommLab/Flower/Home.html', x: 10, y: 20 },
        { name: 'NYUAD', url: 'https://khaleeks.github.io/comicAssign/index.html', x: 30, y: 60 },
        { name: 'Castle Hospital', url: 'https://3md-1.github.io/Sound-Project-Comms-Lab-Fall-2024/SoundProjectFiles/index.html', x: 50, y: 40 },
        { name: "The Principal's Office", url: 'https://khaleeks.github.io/VidEOH/index.html', x: 70, y: 70 },
        { name: 'The Dance Floor', url: 'https://youtu.be/hCLKoBnLZAM', x: 90, y: 30 }
    ];

    const map = document.querySelector('.map');
    const progressBar = document.querySelector('.progress');
    let visitedProjects = new Set();

    projects.forEach((project, index) => {
        const dot = document.createElement('div');
        dot.className = 'project-dot';
        dot.style.left = `calc(${project.x}% - 10px)`;
        dot.style.top = `calc(${project.y}% - 10px)`;
        
        const preview = document.createElement('div');
        preview.className = 'project-preview';
        preview.innerHTML = `
            <h4>${project.name}</h4>
            <iframe src="${project.url}" frameborder="0"></iframe>
            <p>Click to visit</p>
        `;
        
        dot.appendChild(preview);
        map.appendChild(dot);

        dot.addEventListener('mouseenter', () => preview.style.display = 'block');
        dot.addEventListener('mouseleave', () => preview.style.display = 'none');
        dot.addEventListener('click', () => {
            window.open(project.url, '_blank');
            visitedProjects.add(index);
            updateProgressBar();
        });
    });

    function updateProgressBar() {
        const progress = (visitedProjects.size / projects.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    const canvas = document.createElement('canvas');
    canvas.width = map.offsetWidth;
    canvas.height = map.offsetHeight;
    map.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#8b4513';
    ctx.lineWidth = 2;

    function drawLine(startX, startY, endX, endY, progress) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress);
        ctx.stroke();
    }

    function animateLines() {
        let progress = 0;
        const animationDuration = 2000; // 2 seconds
        const startTime = performance.now();

        function animate(currentTime) {
            progress = (currentTime - startTime) / animationDuration;
            if (progress > 1) progress = 1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            projects.forEach((project, index) => {
                if (index > 0) {
                    const prevProject = projects[index - 1];
                    const startX = prevProject.x * canvas.width / 100;
                    const startY = prevProject.y * canvas.height / 100;
                    const endX = project.x * canvas.width / 100;
                    const endY = project.y * canvas.height / 100;
                    drawLine(startX, startY, endX, endY, progress);
                }
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    animateLines();
});