
# CancellationActorType

What kind of principal performed a cancellation.  `System` is not a fallback for \"we failed to resolve the actor\": it names cancellations that no human requested — an expired payment hold, a provider webhook — and those legitimately have no `actor_id`.

## Properties

Name | Type
------------ | -------------


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


