import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-[#953D45] p-4 flex justify-between items-center">
      <div class="text-[#F4E3D1] text-4xl font-bold">Social<span class="font-light">Network</span></div>
      <div class="flex space-x-4">
        <input type="text" placeholder="Find..." class="px-2 py-1 rounded-md">
        <button class="bg-[#F4E3D1] text-[#953D45] px-4 py-1 rounded-md">Upload</button>
        <div class="text-[#F4E3D1] w-[100px] text-wrap">Waseem Arshad</div>
      </div>
    </nav>
    <div class="bg-[#953D45] p-2">
      <div class="flex space-x-2 items-center text-[#F4E3D1] border-y border-[#F4E3D1] p-2">
        <a href="#">Videos</a>
        <a>/</a>
        <a href="#">People</a>
        <a>/</a>
        <a href="#">Documents</a>
        <a>/</a>
        <a href="#">Events</a>
        <a>/</a>
        <a href="#">Communities</a>
        <a>/</a>
        <a href="#">Favorites</a>
        <a>/</a>
        <a href="#">Channels</a>
      </div>
    </div>
  `,
  styles: [],
})
export class NavbarComponent {}
