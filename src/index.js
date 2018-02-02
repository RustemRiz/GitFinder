import React from 'react';
import { render } from 'react-dom';
import {RepositoryListContainer} from './bundles/repositories/components/RepositoryList';

render(
	<div>
		<RepositoryListContainer/>
	</div>,
	document.getElementById('root')
	);