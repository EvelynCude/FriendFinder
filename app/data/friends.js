// ===============================================================================
// DATA
// Below data will hold all of the possible friend matches.
// Initially set it equal to "dummy" friends.
// ===============================================================================

var friendsArray =[
{
    "name": "Cercei Lannister",
    "photo": "https://www.blitzquotidiano.it/wp/wp/wp-content/uploads/2015/05/cersei.jpg",
    "scores": [
        5,
        1,
        5,
        5,
        1,
        5,
        5,
        5,
        1,
        1
    ]
},
{
    "name": "Tyrion Lannister",
    "photo": "http://i.dailymail.co.uk/i/pix/2014/02/10/article-2555555-1B582EBA00000578-944_634x577.jpg",
    "scores": [
        3,
        1,
        3,
        3,
        2,
        1,
        5,
        3,
        4,
        2
    ]
},
{
    "name": "Jon Snow",
    "photo": "https://hips.hearstapps.com/esquireuk.cdnds.net/17/35/2048x2048/square-1504428478-who-jon-snow-mother-game-thrones-2.png?resize=768:*",
    "scores": [
        4,
        3,
        4,
        5,
        3,
        1,
        5,
        4,
        2,
        4
    ]
},
{
    "name": "Daenerys Targaryen",
    "photo": "https://www.google.com/search?q=khaleesi&rlz=1C1CHBF_enUS771US771&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjr85LZv8_aAhWhwVkKHcHqAw4Q_AUICigB&biw=1284&bih=603#imgrc=VRTdw-hnOg9bvM:",
    "scores": [
        5,
        5,
        5,
        5,
        2,
        2,
        5,
        2,
        1,
        1
    ]
    }

];

//  Export array so that it's accessible to other files using require.
module.exports = friendsArray;