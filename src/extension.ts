import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "code-explain-ths" is now active!');

	let disposable = vscode.commands.registerCommand('code-explain-ths.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from code-explain-ths!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
