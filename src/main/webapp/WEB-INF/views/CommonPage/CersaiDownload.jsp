</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
	<!--Admin panel-->
	<div class="">
		<div class="card CardNS">
			<!-- Card body -->
			<div class="card-body px-lg-5 pt-0">
				<form>
					<div class="form-row">
						<div class="col Btxt3">Lead Creation</div>
					</div>
					<div class="form-row ">
						<div class="col-md-3"> </div>
						<div class="col-md-9">
							<div class="HyperControls FltRight"> <a class="Btxt4 ADDBTN FltRight " onclick="InitNewUser();" href="#">Create New Lead</a> </div>
						</div>
					</div>
					<div class="">
						<div class="card-headerBlack white-text">
							<div class="row">
								<div class="col-md-2 "> </div>
								<div class="col-md-5"> </div>
								<div class="col-md-3"> <span class="Ntxt4">Search</span>
									<input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3" title=""> </div>
							</div>
						</div>
						<div class="form-row">
							<div class="col">
								<input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd_1(this,'Table2',{spname:'LSW_SLEADMASTERGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||10','LEADINBOX');" id="BTNRCUGRD" name="BTNRCUGRD" />
								<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2"> </table>
							</div>
						</div>
						<a type="button" id="LEADREMARKPOP" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#LEADREMARKPOPModal"> <i class="fa fa-plus"></i> </a>
						<div class="modal fade" id="LEADREMARKPOPModal" tabindex="-1" role="dialog" aria-labelledby="LEADREMARKPOPModalLabel" aria-hidden="true">
							<div class="modal-dialog" style="max-width:600px" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<div class="Btxt10">Remark</div>
										<a href="#"> <img id="" class="ResolutionClose close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img>
										</a>
									</div>
									<div class="modal-body">
										<div class="">
											<!-- Card body -->
											<div class="">
												<div data-for="LEADREMARKPOPDIV" class="LEADREMARKPOPDIV"> </div>
												<div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="LEADREMARKPOPDIV" style="display:none">
													<div class="DYNROW">
														<form>
															</br>
															<div class="form-row">
																<div class="col">
																	<div class="md-form">
																		<ul class="nav FormPageTab FormMainTab1">
																			<li class="nav-item RoundTabs QBtxt8 Qtyprndgrey">
																				<div class="nav-link active"><span id="TYMSTMPDT" name="TYMSTMPDT" class="MQMRDBfields DataGRP"></span></div>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div class="form-row">
																<div class="col-md-6">
																	<div class="md-form"> <span id="FRMUSRNAME" name="FRMUSRNAME" class="MQMRDBfields QBtxt10"></span> <span id="FRMUSRROLE" name="FRMUSRROLE" class="MQMRDBfields QBtxt4"></span> </div>
																</div>
															</div>
															<div class="form-row">
																<div class="col">
																	<div class="md-form"> <span id="DESC" name="DESC" class="MQMRDBfields QBtxt9"></span> </div>
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="">
										<div class="modal-header">
											<div class="Btxt10">Comments</div>
										</div>
										<div class="form-row">
											<div class="col-md-12">
												<div class="md-form">
													<textarea class="form-control SRFDDBfields" maxlength="1000" id="MNGD_DESC" name="MNGD_DESC" Placeholder="Add Comment..." class="form-control " style="height: 130px;width:500px;"></textarea>
													<input type="text" id="LEADID" hidden="hidden" name="LEADID" class="form-control">
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer align-middle">
										<button type="button" id="LEADDone" class="btn btn-Syel ResolutionSend waves-effect waves-light ">Save</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="ThemeproLO/Commonpage/LEADMASTER/LoadSubmit.js${DMY13}"></script>
	<script type="text/javascript" src="ThemeproLO/Commonpage/LEADMASTER/Validation.js${DMY13}"></script>
	<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
	<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
	<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
	<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
	<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
</div>
</div>
<!--   </div>
   </div>   -->