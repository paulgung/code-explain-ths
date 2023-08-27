import hljs from 'highlight.js';

export default function getWebviewContent(codeBlock: string): string {
  const highlightedCode = hljs.highlightAuto(codeBlock).value;
  const translatedCode = hljs.highlightAuto(codeBlock).value;

  // 构建 Webview 的 HTML 内容，包括高亮显示的代码
  return `
    <html>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/default.min.css">
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/lib/highlight.min.js"></script>
    <body>
      <h1>源代码：</h1>
      <pre><code>${highlightedCode}</code></pre>
      <h1>代码解释：</h1>
      <pre><code>${translatedCode}</code></pre>
    </body>
    </html>
  `;
}
