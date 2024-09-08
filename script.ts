// script.ts
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsSection.classList.contains('hidden')) {
    skillsSection.classList.remove('hidden');
  } else {
    skillsSection.classList.add('hidden');
  }
});

const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById ("your-education") as HTMLInputElement).value;
    const skills = (document.getElementById ("your-skills") as HTMLInputElement).value
    const experience = (document.getElementById ("your-experience") as HTMLInputElement).value

    document.querySelector('#personal-info h1')!.textContent = name;
    document.querySelector('#personal-info p')!.textContent = `Contact: ${email}`;
    document.querySelector('#education ul')!.textContent = education;
    document.querySelector('#skills ul')!.textContent = skills;
    document.querySelector('#work-experience p')!.textContent = experience;

});
