// JavaScript Document
function populate(){
	var keys = [
		{
			col: 'a',
			row: '1',
			val: 3
		},
		{
			col: 'd',
			row: '1',
			val: 2
		},
		{
			col: 'e',
			row: '1',
			val: 1
		},
		{
			col: 'g',
			row: '1',
			val: 5
		},
		{
			col: 'b',
			row: '2',
			val: 5
		},
		{
			col: 'c',
			row: '2',
			val: 8
		},
		{
			col: 'e',
			row: '2',
			val: 7
		},
		{
			col: 'f',
			row: '2',
			val: 3
		},
		{
			col: 'h',
			row: '2',
			val: 2
		},
		{
			col: 'i',
			row: '2',
			val: 1
		},
		{
			col: 'a',
			row: '3',
			val: 7
		},
		{
			col: 'c',
			row: '3',
			val: 2
		},
		{
			col: 'd',
			row: '3',
			val: 5
		},
		{
			col: 'e',
			row: '3',
			val: 9
		},
		{
			col: 'i',
			row: '3',
			val: 8
		},
		{
			col: 'f',
			row: '4',
			val: 1
		},
		{
			col: 'i',
			row: '4',
			val: 7
		},
		{
			col: 'b',
			row: '5',
			val: 7
		},
		{
			col: 'c',
			row: '5',
			val: 3
		},
		{
			col: 'd',
			row: '5',
			val: 8
		},
		{
			col: 'f',
			row: '5',
			val: 5
		},
		{
			col: 'g',
			row: '5',
			val: 1
		},
		{
			col: 'h',
			row: '5',
			val: 6
		},
		{
			col: 'a',
			row: '6',
			val: 8
		},
		{
			col: 'd',
			row: '6',
			val: 7
		},
		{
			col: 'a',
			row: '7',
			val: 4
		},
		{
			col: 'e',
			row: '7',
			val: 8
		},
		{
			col: 'f',
			row: '7',
			val: 7
		},
		{
			col: 'g',
			row: '7',
			val: 2
		},
		{
			col: 'i',
			row: '7',
			val: 9
		},
		{
			col: 'a',
			row: '8',
			val: 1
		},
		{
			col: 'b',
			row: '8',
			val: 9
		},
		{
			col: 'd',
			row: '8',
			val: 3
		},
		{
			col: 'e',
			row: '8',
			val: 6
		},
		{
			col: 'g',
			row: '8',
			val: 7
		},
		{
			col: 'h',
			row: '8',
			val: 8
		},
		{
			col: 'c',
			row: '9',
			val: 7
		},
		{
			col: 'e',
			row: '9',
			val: 5
		},
		{
			col: 'f',
			row: '9',
			val: 4
		},
		{
			col: 'i',
			row: '9',
			val: 3
		},
	];
	
	$.each(keys,function(key,value){
		var target = ".column-" + value.col + ".row-" + value.row;
		$(target).val(value.val).prop('disabled',true).addClass('pre-number');
	});
}