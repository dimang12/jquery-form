/**
 * Created by dimangchou on 7/28/15.
 * Dynamic Input v10 (http://library.dimang.info)
 * Copyright 2015 Dimang.
 * Licensed under the MIT license
 */

(function( $ ) {
    $.fn.dInput = function( options ) {

        // default option
        var defaults = {
            //classes name
            clsHeader: 'd-header',
            clsLabel: 'd-label',
            clsTool: 'd-tools',
            clsBody: 'd-body',
            clsStyle: 'round',
            clsMsg: 'd-msg',
            clsActIcon: 'glyphicon glyphicon-remove',

            //all content
            label: 'Simple text:',
            placeholder: 'Simple text',
            message: 'This is just a simple text'

            //events
        };

        var settings = $.extend( {}, defaults, options );




        //head wrapper
        var dHeader = $( '<div class="'+ settings.clsHeader +' clearfix"></div>' );

        //control's label
        var dLabel = $( '<label class="'+ settings.clsLabel +'"></label>' );
        dLabel.text(settings.label);

        //control's tool
        var dTools = $( '<div class="'+ settings.clsTool +'">' +
                            '<a class="d-action danger">' +
                            '<span class="'+ settings.clsActIcon +'"></span>' +
                            '</a>' +
                        '</div>' );

        //control's body
        var dBody = $( '<div class="'+ settings.clsBody +' round"></div>' );

        //control's message
        var dMsg = $( '<div class="d-msg"><span class="d-msg-default"></span></div>' );
        dMsg.text( settings.message );


        return this.each(function() {
            var t = this;

            // whole wrapper
            var dWrapper = $( this ).parents( '.d-wrapper' );

            // add control to body
            $( t).attr('placeholder', settings.placeholder ).appendTo( dBody );

            // config header
            dLabel.appendTo( dHeader );
            dTools.appendTo( dHeader );

            // add all things to wrapper
            dHeader.appendTo( dWrapper );
            dBody.appendTo( dWrapper );
            dMsg.appendTo( dWrapper );

        });

        //var

    };
}( jQuery ));

