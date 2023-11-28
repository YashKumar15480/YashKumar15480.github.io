        public async Task<bool> UpdateContact(string npi, string firstName, string lastName )
        {
            var cfg = GetClientConfiguration();
            try
            {
                _logger.LogInformation("Xconnect Initializing Connection.");
                //await cfg.InitializeAsync();
                InitializeConnection(ref cfg);
                _logger.LogInformation("Xconnect Initializing Connection Completed.");
            }
            catch (XdbModelConflictException ex)
            {
                throw new Exception(string.Format("[{0}] - {1}{2}", _config.Value.ApplicationName, ex.Message, QueJob.QueEmailJobIndicator));
            }

            try
            {
                using (var client = new XConnectClient(cfg))
                {
                    IAsyncQueryable<Contact> queryable = client.Contacts
                                           .Where(c => c.Identifiers.Any(x => x.Source == "EDEP-NPI")
                                            && c.GetFacet<AdditionalPersonalInformation>().NPINumber == npi)
                                           .WithExpandOptions(new ContactExpandOptions(
                                             PersonalInformation.DefaultFacetKey,
                                             EmailAddressList.DefaultFacetKey)
                                           { });
                    var searchResults = await queryable.ToSearchResults();

                    var sitecoreContact = searchResults.Results.FirstOrDefaultAsync().Result.Item;

                    var personal = sitecoreContact.GetFacet<PersonalInformation>();

                    personal.FirstName = firstName;
                    personal.LastName = lastName;
                    client.SetFacet(sitecoreContact, PersonalInformation.DefaultFacetKey, personal);
                    await client.SubmitAsync();

                }
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex.Message}");
                throw;
            }
        }



        Task<bool> UpdateContact(string nPINumber, string firstName, string lastName); __> add this line in IXconnectService.cs file