import { BaseComponent } from './BaseComponent.js';

class TeamMemberCard extends BaseComponent {
  connectedCallback() {
      const name = this.getAttribute('name') || 'Anonyme';
      const image = this.getAttribute('image') || 'assets/team/taha.jpg';
      const roleEn = this.getAttribute('role-en') || 'Team Member';
      const roleFr = this.getAttribute('role-fr') || 'Membre de l\'équipe <3';

      this.innerHTML = `
          <div class="group relative bg-green-200 rounded-md overflow-hidden transition-all duration-300">
              <div class="relative h-64 bg-green-200 overflow-hidden">
                  <img src="${image}" alt="${name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                  <div class="absolute inset-0 bg-green-600 mix-blend-multiply opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div class="p-6 text-center">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">${name}</h3>
                  <p class="text-green-600 font-semibold uppercase tracking-wide text-sm" data-fr="${roleFr}" data-en="${roleEn}">${roleEn}</p>
              </div>
          </div>
      `;
  }
}

customElements.define('team-member-card', TeamMemberCard);
