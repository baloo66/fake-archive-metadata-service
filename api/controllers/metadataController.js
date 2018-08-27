'use strict';

exports.deleteDocLogical = function(req, res) {
    console.log('deleteDocLogical called with a dokid of [' + req.body.docID + '] and a user [' + req.body.user + ']');
    if (req.body.docID == '47') {
        res.status(200).json( { "rc": "200",
                                "fehlertext": ""
                              });
    } else {
        res.status(500).json( { "rc": "500",
                                "fehlertext": "irgendeinfehler"
                              });
    };
};



exports.retrieveMetadata = function(req, res) {
    console.log('retrieveMetadata called with a dokid of [' + req.params.dokid + ']');
    if (req.params.dokid == '1') {
        res.status(200).json( { "rc": "200",
                                "archlist": [
                                {
                                    "docid": "1",
                                    "version": 99,
                                    "aktualdatum": "2018-09-09T22:33:44.567Z",
                                    "aktualuser": "xl09617",
                                    "anlagedatum": "2018-09-09T22:33:44.567Z",
                                    "anlageuser": "xl09617",
                                    "aufbewahrungsfrist": "2999-12-31T23:59:59.999Z",
                                    "dokumentart": "art",
                                    "dokumenttyp": "typ",
                                    "extdid": "anotherdid",
                                    "loeschdatum": "",
                                    "loeschmm": "",
                                    "kurzbeschreibung": "eine kurze beschreibung",
                                    "notiz": "base64notiz",
                                    "arbeitsgebiet": "12345"
                                }
                                ],
                                "metalist": [
                                {
                                    "docid": "1",
                                    "attributname": "attr1",
                                    "attributcontent": "cont1",
                                    "aktualdatum": "2018-09-09T22:33:44.567Z",
                                    "aktualuser": "xl09617",
                                    "anlagedatum": "2018-09-09T22:33:44.567Z",
                                    "anlageuser": "xl09617"
                                },
                                {
                                    "docid": "1",
                                    "attributname": "attr2",
                                    "attributcontent": "cont2",
                                    "aktualdatum": "2018-09-09T22:33:44.567Z",
                                    "aktualuser": "xl09617",
                                    "anlagedatum": "2018-09-09T22:33:44.567Z",
                                    "anlageuser": "xl09617"
                                },
                                {
                                    "docid": "1",
                                    "attributname": "attr3",
                                    "attributcontent": "cont3",
                                    "aktualdatum": "2018-09-09T22:33:44.567Z",
                                    "aktualuser": "xl09617",
                                    "anlagedatum": "2018-09-09T22:33:44.567Z",
                                    "anlageuser": "xl09617"
                                }
                                ]
                            });
    } else if (req.params.dokid == '48') {
        res.status(500).json({ "rc": "500",
                               "archlist": [],
                               "metalist": []
                            });
    } else {
        res.status(200).json({ "rc": "200",
                               "archlist": [],
                               "metalist": []
                            });
    }
}



exports.writeMetadata = function(req, res) {
    console.log('writeMetadata called');
    res.status(200).end();
}



exports.searchByMetadata = function(req, res) {
    console.log('searchByMetadata called');
    res.status(200).end();
}