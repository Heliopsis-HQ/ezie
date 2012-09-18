// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: eZ Image Editor extension for eZ Publish
// SOFTWARE RELEASE: 0.1 (preview only)
// COPYRIGHT NOTICE: Copyright (C) 1999-2012 eZ Systems AS
// SOFTWARE LICENSE: GNU General Public License v2.0
// NOTICE: >
//   This program is free software; you can redistribute it and/or
//   modify it under the terms of version 2.0  of the GNU General
//   Public License as published by the Free Software Foundation.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of version 2.0 of the GNU General
//   Public License along with this program; if not, write to the Free
//   Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//   MA 02110-1301, USA.
//
//
// ## END COPYRIGHT, LICENSE AND WARRANTY NOTICE ##

ezie.gui.config.bind.filter_contrast = function() {
    $.log('starting contrast filter');

    ezie.gui.eziegui.getInstance().opts().showOpts("#optsContrast");
}

ezie.gui.config.bind.filter_contrast_slide = function(val) {
    $('#optsContrast input[name="optsContrastValue"]:first').val(val);
}

ezie.gui.config.bind.filter_contrast_submit = function() {
    var val = $('#optsContrast input[name="optsContrastValue"]:first').val();

    $.log('sending contrast action');

    ezie.ezconnect.connect.instance().action({
        'action':   'filter_contrast',
        'data':     {
            'value':    val
        }
    });
}