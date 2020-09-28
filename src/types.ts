import Slide from "./components/slide/Slide"

export interface SlideComponent {
  name: string
  year?: string
  headerDescription: string
  bodyDescription?: string
  images?: Image[]
  link?: string
  pieces?: Piece[]
  media?: string
  contact?: string
}

interface Image {
  description: string
  src: string
}

interface Piece {
  name?: string
  description?: string
  media: string
  images?: Image[]
}

export interface BlogComponent {
  htmlText: string
  date: string
  title: string
  id: number
}
