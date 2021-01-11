// export interface Trabajo {
    
// }


export interface RootObject {
  status: string;
  blogs: Blog[];
}

export interface Blog {
  _id: string;
  idblog: number;
  nombre: string;
  fecha: string;
  descripcion: string;
  descripcion2: string;
  imgEncabezado: string;
  video: string;
  tittleSeo: string;
  descripcionSeo: string;
  format_detection: string;
  viewport: string;
  author: string;
  googlebot: string;
  robots: string;
  og_site_name: string;
  og_url: string;
  og_title: string;
  og_description: string;
  og_locale: string;
  og_type: string;
  fb_app_id: string;
  og_image: string;
  og_image_height: string;
  og_image_width: string;
  twitter_image: string;
  og_image_secure_url: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_creator: string;
  twitter_site: string;
  twitter_domain: string;
  article_publisher: string;
  article_tag: string;
  revisit_after: string;
  distribution: string;
  generator: string;

}
