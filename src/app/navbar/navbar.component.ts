import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-[#953D45] p-4 flex justify-between items-center">
      <div class="text-white text-lg font-bold">SocialNetwork</div>
      <div class="flex space-x-4">
        <input type="text" placeholder="Find..." class="px-2 py-1 rounded-md">
        <button class="bg-white text-[#953D45] px-4 py-1 rounded-md">Upload</button>
        <div class="text-white w-[100px] text-wrap">Waseem Arshad</div>
      </div>
    </nav>
    <div class="bg-[#953D45] p-2">
      <div class="flex space-x-4 justify-center text-white">
        <a href="#">Videos</a>
        <a href="#">People</a>
        <a href="#">Documents</a>
        <a href="#">Events</a>
        <a href="#">Communities</a>
        <a href="#">Favorites</a>
        <a href="#">Channels</a>
      </div>
    </div>
  `,
  styles: [],
})
export class NavbarComponent {}
