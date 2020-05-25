import { TestBed } from '@angular/core/testing';

import { DataGitService } from './data-git.service';

describe('DataGitService', () => {
  let service: DataGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
