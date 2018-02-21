;( function( $, undefined ) {

	$( window  ).on( 'load', function() {


		/*

		*/
    function LeftMenu()
    {
      var where = $("#lmenu > ul");
      if ( $("div").is("#lmenu") )
      {
				$.getJSON("data.json",function(data)

				{
					var source = $("#LeftMenuTemplate").html();
					var template = Handlebars.compile(source);
					var html =  template(data);
					where.append(html);
				});
      }
    }

		function HistoryPage()
		{
			var where = $("#historypage > div > div > div");
			if ( $("section").is("#historypage") )
			{
				$.getJSON("data.json",function(data)

				{
					var source = $("#HistoryPageTemplate").html();
					var template = Handlebars.compile(source);
					var html =  template(data);
					where.append(html);
				});
			}
		}

    /*Шаблон главного меню*/
    function MainMenu()
    {
      var where = $("#mainmenu > div > div > div");
      if ( $("section").is("#mainmenu") )
      {
				$.getJSON("data.json",function(data)
				{
           var source = $("#MainMenuTemplate").html();
           var template = Handlebars.compile(source);
           var html =  template(data);
           where.append(html);
        });
      }
    }

    function ProgramsMenu()
    {
      var where = $("#programsmenu > div > div > div");
      if ( $("section").is("#programsmenu") )
      {
				$.getJSON("data.json",function(data)
				{
           var source = $("#ProgramsMenuTemplate").html();
           var template = Handlebars.compile(source);
           var html =  template(data);
           where.append(html);
        });
      }

    }
      LeftMenu();
      MainMenu();
      ProgramsMenu();
			HistoryPage();
  });
})( jQuery );
