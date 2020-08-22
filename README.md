# Web NFC Example

## Context

In this example we can see the Web NFC API in action, in a hypothetical smart museum where using a smartphone we can write an NDEF TextRecord on an NFC tag.

## Background

Web NFC aims to provide sites the ability to read and write to NFC tags when they are brought in close proximity to the user’s device (usually 5-10 cm, 2-4 inches). The current scope is limited to NDEF, a lightweight binary message format. Low-level I/O operations (e.g. ISO-DEP, NFC-A/B, NFC-F) and Host-based Card Emulation (HCE) are not supported within the current scope.

## Requirements

* A device with NFC
* Chrome/Chromium 81+ with the "Experimental Web Platform features" flag enabled.

# Live Example
Hosted using GitHube Pages. [Link](https://lrazovic.github.io/web-nfc-museum/)
