import { TestBed } from '@angular/core/testing';

import { WhiteSpaceuiService } from './white-spaceui.service';

describe('WhiteSpaceuiService', () => {
  let service: WhiteSpaceuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiteSpaceuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
