#!/bin/bash

npm install
zimlet build
zimlet package -v 0.0.1 --zimbraXVersion ">=2.0.0" -n "zimbra-zimlet-ics-export" --desc "Adds a button in the more menu to export an event to ics." -l "Export event as ICS"
