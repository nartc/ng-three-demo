import { NgtCanvas, NgtVector3 } from "@angular-three/core";
import { NgtBoxGeometry } from "@angular-three/core/geometries";
import { NgtMeshBasicMaterial } from "@angular-three/core/materials";
import { NgtMesh } from "@angular-three/core/meshes";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";
import { Component, Input, OnInit } from "@angular/core";
import { Mesh } from "three/src/Three";

@Component({
  selector: "app-cube",
  standalone: true,
  imports: [NgtMesh, NgtBoxGeometry, NgtMeshBasicMaterial],
  template: `
    <ngt-mesh
      [position]="position"
      (pointerover)="hovered = true"
      (pointerout)="hovered = false"
      (beforeRender)="onBeforeRender($event.object)"
    >
      <ngt-box-geometry></ngt-box-geometry>
      <ngt-mesh-basic-material
        [color]="hovered ? 'turquoise' : 'tomato'"
      ></ngt-mesh-basic-material>
    </ngt-mesh>
  `,
})
export class CubeComponent {
  @Input() position?: NgtVector3;

  hovered = false;

  onBeforeRender(object: Mesh) {
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
  }
}

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <ngt-canvas>
      <app-cube [position]="[1.5, 0, 0]"></app-cube>
      <app-cube [position]="[-1.5, 0, 0]"></app-cube>

      <ngt-soba-orbit-controls></ngt-soba-orbit-controls>
    </ngt-canvas>
  `,
  styles: [],
  imports: [NgtCanvas, CubeComponent, NgtSobaOrbitControls],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
