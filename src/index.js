import React from 'react';
import { render } from 'react-dom';
import {RepositoryListContainer} from './bundles/repositories/components/RepositoryList';
import {FinderContainer as FinderByLogin} from './bundles/finder/components/Finder';

render(	
	<div>
		<FinderByLogin />	
	</div>,
	document.getElementById('root')
	);


