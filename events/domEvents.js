import { deleteIdea, getIdeas, getSingleIdea } from '../api/ideaData';
import { getSingleProject, getProjects } from '../api/projectData';
import { getIdeaDetails, getProjectDetails } from '../api/mergedData';
import { addIdeaForm, addProjectForm } from '../components/forms';
import { showIdeas } from '../pages/ideas';
import viewProject from '../pages/viewProject';
import viewIdea from '../pages/viewIdea';

/* eslint-disable no-alert */
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-idea')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteIdea(firebaseKey).then(() => {
          getIdeas().then(showIdeas);
        }).catch((error) => console.error('Error deleting idea:', error));
      }
    }

    if (e.target.id.includes('add-idea-btn')) {
      addIdeaForm();
    }

    if (e.target.id.includes('edit-idea-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleIdea(firebaseKey).then((ideaObj) => addIdeaForm(ideaObj))
        .catch((error) => console.error('Error fetching idea:', error));
    }

    if (e.target.id.includes('view-idea-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getIdeaDetails(firebaseKey).then(viewIdea)
        .catch((error) => console.error('Error viewing idea details:', error));
    }

    if (e.target.id.includes('view-project-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getProjectDetails(firebaseKey).then(viewProject)
        .catch((error) => console.error('Error viewing project details:', error));
    }

    if (e.target.id.includes('add-project-btn')) {
      addProjectForm();
    }

    if (e.target.id.includes('edit-project-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleProject(firebaseKey).then((projectObj) => addProjectForm(projectObj))
        .catch((error) => console.error('Error fetching project:', error));
    }
  });

  const displayResults = (results) => {
    const resultsContainer = document.querySelector('#results-container');
    resultsContainer.innerHTML = '';
    results.forEach((result) => {
      const resultHTML = `
        <div class="result">
          <h3>${result.title}</h3>
          <p>${result.description}</p>
        </div>
      `;
      resultsContainer.innerHTML += resultHTML;
    });
  };

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase();
    const results = [];

    getIdeas().then((ideas) => {
      const filteredIdeas = ideas.filter((idea) => idea.title.toLowerCase().includes(query) || idea.description.toLowerCase().includes(query));
      results.push(...filteredIdeas);

      getProjects().then((projects) => {
        const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query));
        results.push(...filteredProjects);

        displayResults(results);
      });
    }).catch((error) => console.error('Error fetching ideas or projects:', error));
  });
};

export default domEvents;
