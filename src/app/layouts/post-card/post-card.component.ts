import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() PostData!: any

  postImg!: string
  postViews!: string
  postTitle!: string
  postExcerpt!: string
  postCreatedAt!: any
  postCategory!: string
  time!: any
  postId!: string
  ngOnInit(): void {
    if (this.PostData) {
      this.postId = this.PostData.id
      this.postImg = this.PostData.data.postImgPath
      this.postCategory = this.PostData.data.category.category
      this.postViews = this.PostData.data.view
      this.postTitle = this.PostData.data.title
      this.postExcerpt = this.PostData.data.excerpt
      this.postCreatedAt = this.PostData.data.createdAt
      this.time = this.convertToDate(this.postCreatedAt.seconds)
    } else {

    }

  }

  convertToDate(timeStambs: any) {
    const dateObj = new Date(timeStambs)
    const year = dateObj.toLocaleDateString()
    return { year }
  }

}
