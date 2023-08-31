import {Component, Input, OnInit} from '@angular/core';
import {SectionDto} from "../../models/section.model";
import {AuthService} from "../../services/auth.service";
import {CreateFileDto} from "../../models/file.model";
import {FileService} from "../../services/file.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-section-accordion',
  templateUrl: './section-accordion.component.html',
  styleUrls: ['./section-accordion.component.scss']
})
export class SectionAccordionComponent implements OnInit {

  @Input()
  section!: SectionDto;
  @Input()
  index!: number;
  selectedFile!: File;
  isProf: boolean = false;

  constructor(private authService: AuthService,
              public fileService: FileService,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.isProf = this.authService.isProf();
  }

  public onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  public uploadFile() {
    if (this.selectedFile) {
      this.fileService.uploadFile(this.selectedFile).subscribe({
        next: (res: any) => {
          const createFileDto: CreateFileDto = {
            name: this.selectedFile.name,
            path: res.filePath,
            type: this.selectedFile.type,
            size: this.selectedFile.size,
            sectionId: this.section.id
          };
          this.createFile(createFileDto);
        },
        error: (err) => {
          this.handleUploadError(err);
        }
      });
    }
  }

  private createFile(createFileDto: CreateFileDto) {
    this.fileService.createFile(createFileDto).subscribe({
      next: (res) => {
        this.alertService.success("File uploaded successfully");
        window.location.reload();
      },
      error: (err) => {
        this.handleUploadError(err);
      }
    });
  }

  private handleUploadError(err: any) {
    this.alertService.error(err.error.message);
  }

  deleteFile(id: number) {
    this.fileService.deleteFile(id).subscribe({
      next: (res) => {
        this.alertService.success("File deleted successfully");
        window.location.reload();
      },
      error: (err) => {
        this.handleUploadError(err);
      }
    });
  }
}
