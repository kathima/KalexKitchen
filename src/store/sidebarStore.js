import { defineStore } from 'pinia'

export const sidebarStore = defineStore('navSidebar', {
    state: () => ({
        collapsed: true,
        widthSidebar: '0',
    }),

    actions: {
        handleSidebar() {
             if (this.collapsed) {
                 this.collapsed = false;
                 this.widthSidebar = "fit-content"
             } else {
                 this.collapsed = true;
                 this.widthSidebar = "0"
             }
        }
    }
})

