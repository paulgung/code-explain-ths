import * as vscode from 'vscode';

const outputChannel = vscode.window.createOutputChannel('代码解释');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "code-explain-ths" is now active!');

	const disposable = vscode.commands.registerCommand('code-explain-ths.explainCode', () => {
		// 获取用户选中的代码块
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			const codeBlock = editor.document.getText(selection);


			// 创建一个 Webview 面板
			const panel = vscode.window.createWebviewPanel(
				'codeExplanation',
				'代码解释',
				vscode.ViewColumn.Three,
				{}
			);
	
			// 设置 Webview 的 HTML 内容
			panel.webview.html = getWebviewContent(codeBlock);

		}
	});

	context.subscriptions.push(disposable);

	function getWebviewContent(codeBlock: string): string {
		// 构建 Webview 的 HTML 内容
		return `
			<html>
			<body>
				<h1>源代码：</h1>
				<pre>${codeBlock}</pre>
				<h1>代码解释：</h1>
				<pre>${codeBlock}</pre>
			</body>
			</html>
		`;
	}
}

export function deactivate() {}
