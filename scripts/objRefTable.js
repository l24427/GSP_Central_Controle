const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Internationalization,
		C3.Plugins.AJAX,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Internationalization.Exps.Lookup,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Internationalization.Acts.LoadFromJSON,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{tx1: 0},
	{txSimples: 0},
	{txSim: 0},
	{txNao: 0},
	{Senóide: 0},
	{bt_reiniciar: 0},
	{receita_nao_cadastrada: 0},
	{tradutor: 0},
	{AJAX: 0},
	{Mouse: 0},
	{bt_home: 0},
	{Navegador: 0},
	{bg: 0}
];

self.InstanceType = {
	tx1: class extends self.ITextInstance {},
	txSimples: class extends self.ITextInstance {},
	txSim: class extends self.ITextInstance {},
	txNao: class extends self.ITextInstance {},
	bt_reiniciar: class extends self.ISpriteInstance {},
	receita_nao_cadastrada: class extends self.ISpriteInstance {},
	tradutor: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	bt_home: class extends self.ISpriteInstance {},
	Navegador: class extends self.IInstance {},
	bg: class extends self.ISpriteInstance {}
}