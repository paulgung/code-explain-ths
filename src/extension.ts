import * as vscode from 'vscode';
import getWebviewContent from './getWebviewContent';

export function activate(context: vscode.ExtensionContext) {

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
				vscode.ViewColumn.One,
				{}
			);
	
			// 设置 Webview 的 HTML 内容
			panel.webview.html = getWebviewContent(codeBlock);

		}
	});

	context.subscriptions.push(disposable);

}

export function deactivate() {}
