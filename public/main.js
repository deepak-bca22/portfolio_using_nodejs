const ResumeBtns = document.querySelectorAll('.resume-btn');
ResumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        const ResumeDetails = document.querySelectorAll('.resume-detail')
        ResumeBtns.forEach(btn=>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        ResumeDetails.forEach(btn=>{
            btn.classList.remove('active');
        })
        ResumeDetails[idx].classList.add('active')
    })
})

// Handle navigation elements
const navElements = document.querySelectorAll('nav > a');
const sections = document.querySelectorAll('section');

navElements.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Add 'active' class to the corresponding section
        sections[index].classList.add('active');

        //remove 'active' class from all nav element
        navElements.forEach(element=>{
            element.classList.remove('active');
        })
        navElements[index].classList.add('active');
    });
});
