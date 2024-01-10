//The layout.js-file defines the shell around one or more pages. It's the layout into which a page will be rendered.
//Every Next project needs at least one root layout.js-file. One layout-file at the top of the app folder.

import './globals.css'


// "metadata" is a reserved name in Next.js and is used instead of the head-tag in the return (html)
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// Since layout.js is the wrapper around one or more pages, "children" will be the content of the page.js-file that is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
