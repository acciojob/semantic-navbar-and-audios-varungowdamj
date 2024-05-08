//your code here
cy.contains('3 random audios');
cy.get('audio').should($audios => {
    expect($audios).to.have.length(3);
    expect($audios).to.have.attr('controls');
    const srcs = $audios.map((i, el) => Cypress.$(el).attr('src'));
    expect(srcs.get()).to.deep.eq([
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ]);
});
