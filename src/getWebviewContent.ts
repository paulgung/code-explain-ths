import Prism from 'prismjs';

export default function getWebviewContent(codeBlock: string): string {
  // 将代码块进行高亮显示
  const highlightedCode = Prism.highlight(codeBlock, Prism.languages.javascript, 'javascript');

  // 构建 Webview 的 HTML 内容，包括高亮显示的代码
  return `
    <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css">
    </head>
    <body>
      <h1>源代码：</h1>
      <pre><code class="language-javascript">${highlightedCode}</code></pre>
      <h1>代码解释：</h1>
      <pre><code class="language-javascript">${highlightedCode}</code></pre>
    </body>
    </html>
  `;
}
