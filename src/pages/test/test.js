var app = new Vue({
	el: '#box',
	data: {
		items: [
			{title: 'title1', id: 1},
			{title: 'title2', id: 2},
			{title: 'title3', id: 3},
			{title: 'title4', id: 4},
			{title: 'title5', id: 5}
		]
	},
	created(){
		console.log(document.querySelector('li'))
		this.$nextTick(()=>{
			console.log(document.querySelector('li'))
		})
	},
	mounted(){
		console.log(document.querySelector('li'))
		this.items.unshift(this.items.pop())
		console.log(document.querySelector('li'))
		this.$nextTick(()=>{
			console.log(document.querySelector('li'))
		})
	}
})