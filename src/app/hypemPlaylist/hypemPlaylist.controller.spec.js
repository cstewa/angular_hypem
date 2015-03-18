'use strict';

describe('factory', function(){
  beforeEach(module('finalProj'));

  var popularTracksService;

  beforeEach(inject(function(_PopularTracks_) {
    popularTracksService = _PopularTracks_;
  }))

  it('should return popular playlist resource', function() {
    expect(popularTracksService.popular).toEqual([])
  })

});
