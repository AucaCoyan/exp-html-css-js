function isEmail(mail: string) {
	const inp = document.createElement('input');
	inp.type = 'email';
	inp.required = true;
	inp.value = mail;

	return inp.checkValidity();
}

console.log(isEmail('aaa@bb.cc'));
console.log(isEmail('@aaabb.cc'));

